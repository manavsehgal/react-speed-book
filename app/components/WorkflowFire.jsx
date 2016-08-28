import React, { PropTypes } from 'react';

export default class WorkflowFire extends React.Component {
  static propTypes = {
    steps: PropTypes.object.isRequired,
    rsdb: PropTypes.object.isRequired,
    realtime: PropTypes.bool,
    stepChange: PropTypes.func
  }
  static defaultProps = { realtime: false }
  constructor(props) {
    super(props);
    this.state = {
      stepsIndex: 0,
      steps: Object.values(this.props.steps),
      firebase: false,
      stepsCount: Object.values(this.props.steps).length };
    this.cycleSequence = this.cycleSequence.bind(this);
    this.cycleScenario = this.cycleScenario.bind(this);
  }
  componentDidMount() {
    const getSteps = (snap) => {
      this.setState({
        steps: snap.val(),
        firebase: true,
        stepsCount: snap.numChildren()
      });
    };
    if (this.props.realtime) {
      this.props.rsdb.ref('steps').on('value', getSteps);
    } else {
      this.props.rsdb.ref('steps').once('value').then(getSteps);
    }
  }
  cycleSequence() {
    const nextIndex =
      this.state.stepsIndex === (this.state.steps.length - 1)
      ? 0
      : this.state.stepsIndex + 1;

    if (this.props.stepChange) {
      const stepsList = this.state.steps;
      const nextStep = stepsList[nextIndex];
      this.props.stepChange(nextStep.workflow, nextStep.strategy, nextStep.sequence);
    }

    this.setState({ stepsIndex: nextIndex });
  }
  cycleScenario() {
    const stepsList = this.state.steps;
    const currentStep = stepsList[this.state.stepsIndex];
    let stepsCount = 0;
    for (let i = 0; i < stepsList.length; ++i) {
      if (stepsList[i].symbol === currentStep.symbol) stepsCount++;
    }
    const currentScenario = currentStep.strategy;
    const loopStart =
      (this.state.stepsIndex + stepsCount) >= stepsList.length
      ? 0
      : this.state.stepsIndex + 1;
    for (let i = loopStart; i < stepsList.length; ++i) {
      if (stepsList[i].strategy !== currentScenario) {
        if (this.props.stepChange) {
          const nextStep = stepsList[i];
          this.props.stepChange(nextStep.workflow, nextStep.strategy, nextStep.sequence);
        }

        this.setState({ stepsIndex: i });
        break;
      }
    }
  }
  render() {
    const stepsList = this.state.steps;
    const currentStep = stepsList[this.state.stepsIndex];
    return (
      <div className="workflow">
        <div className="workflow__scenario">
          {currentStep.strategy}
        </div>
        <div className="workflow__text">
          {currentStep.text
            ? currentStep.text
            : <img src={currentStep.img}
              alt={currentStep.strategy} />}
        </div>
        <div className="workflow__nav">
          <div onClick={this.cycleScenario} className="workflow__symbol">
            {currentStep.symbol}
          </div>
          <div className="workflow__steps">
            {currentStep.workflow}
          </div>
          <div onClick={this.cycleSequence} className="workflow__sequence">
            {currentStep.sequence}
          </div>
        </div>
        <br />
        <div className="text--center">
          <small>
            Data Source: {this.state.firebase ? 'Firebase' : 'Local'}
            &nbsp;| Steps count: {this.state.stepsCount}
          </small>
        </div>
      </div>

    );
  }
}
