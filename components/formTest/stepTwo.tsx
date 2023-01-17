import React from "react";
import styles from "../../styles/formSteps.module.css";
import { Card, Col, Row, Checkbox,Radio } from "antd";
import "@fortawesome/fontawesome-svg-core/styles.css";

const StepTwo = () => {
  return (
    <div className={styles.div}>
      <h2>How often do you need services?</h2>
      <Row>
        <Col span={13} className={styles.div1}>
          <Row>
            <Col span={8} className={styles.div2}>
              <input
                type="checkbox"
                id="checkboxOne"
                value="Weekly"
                className={styles.aa}
              />
              <label for="checkboxOne" className={styles.bb}>
              Weekly
              </label>
            </Col>
            <Col span={8} className={styles.div2}>
              <input
                type="checkbox"
                id="checkboxTwo"
                value="Every two weeks"
                className={styles.aa}
              />
              <label for="checkboxTwo" className={styles.bb}>
              Every two weeks
              </label>
            </Col>
            <Col span={8} className={styles.div2}>
              <input
                type="checkbox"
                id="checkboxThree"
                value="Monthly"
                className={styles.aa}
              />
              <label for="checkboxThree" className={styles.bb}>
              Monthly
              </label>
            </Col>
          </Row>
          <Row>
            <Col span={8} className={styles.div2}>
              <input
                type="checkbox"
                id="checkboxFour"
                value="Daily"
                className={styles.aa}
              />
              <label for="checkboxFour" className={styles.bb}>
              Daily
              </label>
            </Col>
            <Col span={8} className={styles.div2}>
              <input
                type="checkbox"
                id="checkboxFive"
                value="One-off"
                className={styles.aa}
              />
              <label for="checkboxFive" className={styles.bb}>
              One-off
              </label>
            </Col>
          </Row>
        </Col>
      </Row>

      <h2>What is your preferred cleaning days?</h2>
      <Row>
        <Col span={13} className={styles.div1}>
          <Row>
            <Col span={8} className={styles.div2}>
              <input
                type="checkbox"
                id="checkboxSix"
                value="Monday"
                className={styles.aa}
              />
              <label for="checkboxSix" className={styles.bb}>
                Monday
              </label>
            </Col>
            <Col span={8} className={styles.div2}>
              <input
                type="checkbox"
                id="checkboxSeven"
                value="Tuesday"
                className={styles.aa}
              />
              <label for="checkboxSeven" className={styles.bb}>
                Tuesday
              </label>
            </Col>
            <Col span={8} className={styles.div2}>
              <input
                type="checkbox"
                id="checkboxEight"
                value="Wendnesday"
                className={styles.aa}
              />
              <label for="checkboxEight" className={styles.bb}>
                Wendnesday
              </label>
            </Col>
          </Row>

          <Row>
            <Col span={8} className={styles.div2}>
              <input
                type="checkbox"
                id="checkboxOne"
                value="Rainbow Dash"
                className={styles.aa}
              />
              <label for="checkboxOne" className={styles.bb}>
                Rainbow Dash
              </label>
            </Col>
            <Col span={8} className={styles.div2}>
              <input
                type="checkbox"
                id="checkboxTwo"
                value="Rainbow Dash"
                className={styles.aa}
              />
              <label for="checkboxTwo" className={styles.bb}>
                Rainbow Dash
              </label>
            </Col>
            <Col span={8} className={styles.div2}>
              <input
                type="checkbox"
                id="checkboxThree"
                value="Rainbow Dash"
                className={styles.aa}
              />
              <label for="checkboxThree" className={styles.bb}>
                Rainbow Dash
              </label>
            </Col>
          </Row>

          <Row>
            <Col span={8} className={styles.div2}>
              <input
                type="checkbox"
                id="checkboxOne"
                value="Rainbow Dash"
                className={styles.aa}
              />
              <label for="checkboxOne" className={styles.bb}>
                Rainbow Dash
              </label>
            </Col>
            <Col span={8} className={styles.div2}>
              <input
                type="checkbox"
                id="checkboxTwo"
                value="Rainbow Dash"
                className={styles.aa}
              />
              <label for="checkboxTwo" className={styles.bb}>
                Rainbow Dash
              </label>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default StepTwo;
