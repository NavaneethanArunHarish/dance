import React from 'react';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../asset/css/plugins.min.css';
import '../asset/css/style.themed.css';
import '../asset/css/preload.css';
import '../asset/css/footer.css'
import '../asset/css/style.light-blue-500.min.css';
import '../asset/css/ng2-select.css';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
  } from 'material-ui/Stepper';
  import RaisedButton from 'material-ui/RaisedButton';
  import FlatButton from 'material-ui/FlatButton';


export class FeedBack extends React.Component {
    state = {
        finished: false,
        stepIndex: 0,
      };
    
      handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 2,
        });
      };
    
      handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
          this.setState({stepIndex: stepIndex - 1});
        }
      };
    
      renderStepActions(step) {
        const {stepIndex} = this.state;
    
        return (
          <div style={{margin: '12px 0'}}>
            <RaisedButton
              label={stepIndex === 2 ? 'Finish' : 'Next'}
              disableTouchRipple={true}
              disableFocusRipple={true}
              primary={true}
              onClick={this.handleNext}
              style={{marginRight: 12}}
            />
            {step > 0 && (
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                disableTouchRipple={true}
                disableFocusRipple={true}
                onClick={this.handlePrev}
              />
            )}
          </div>
        );
      }
    
      render() {
        const {finished, stepIndex} = this.state;
    
        return (
      <MuiThemeProvider>
      
          <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
            <Stepper activeStep={stepIndex} orientation="vertical">
              <Step>
                <StepLabel>Select An Event</StepLabel>
                <StepContent>
                  <p>
                    An event may be organised by a organization, it has different categories which may have more events under which is hosted by a trainer under a schedule
                  </p>
                  {this.renderStepActions(0)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Search for schedules in an event</StepLabel>
                <StepContent>
                  <p>Different schedules for different types of categories will be sorted out</p>
                  {this.renderStepActions(1)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Book your schedule</StepLabel>
                <StepContent>
                  <p>
                    Well, you're done booking for your schedule, now just sit back an wait for your schedule timings and rip out! --KK Dance School
                  </p>
                  {this.renderStepActions(2)}
                </StepContent>
              </Step>
            </Stepper>
            {finished && (
              <p style={{margin: '20px 0', textAlign: 'center'}}>
               Good! You're ready to go! 
              </p>
            )}
          </div>
      </MuiThemeProvider>
      
        );
      }
    }