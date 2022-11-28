import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FitnessLandingPage.module.css";

const FitnessLandingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExercisesButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularExercisesSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTrainersButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='trainersContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPricingButtonClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onLoginButtonClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onButtonClick = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onButton1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularExercisesSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton2Click = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  const onButton3Click = useCallback(() => {
    // Please sync "Page 2" to the project
  }, []);

  return (
    <div className={styles.fitnessLandingPageDiv}>
      <div className={styles.navbarDiv}>
        <div className={styles.navDiv}>
          <button className={styles.logoButton} onClick={onLogoButtonClick}>
            WORKOUT
          </button>
          <div className={styles.menuRightDiv}>
            <div className={styles.menuLinksDiv}>
              <button
                className={styles.exercisesButton}
                onClick={onExercisesButtonClick}
              >
                EXERCISES
              </button>
              <button
                className={styles.exercisesButton}
                onClick={onTrainersButtonClick}
              >
                TRAINERS
              </button>
              <button
                className={styles.exercisesButton}
                onClick={onPricingButtonClick}
              >
                PRICING
              </button>
              <button
                className={styles.loginButton}
                onClick={onLoginButtonClick}
              >
                LOGIN
              </button>
            </div>
            <button className={styles.hamburgerIconButton}>
              <img className={styles.group2Icon} alt="" src="../group2.svg" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.heroSectionDiv}>
        <div className={styles.heroTextDiv}>
          <div className={styles.newCalloutDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.rectangleDiv1} />
            <div className={styles.nEWDiv}>NEW</div>
            <div className={styles.highIntensityWorkoutToBurn}>
              High Intensity workout to burn calories
            </div>
          </div>
          <div className={styles.heroCTADiv}>
            <div className={styles.titleDiv}>
              <p className={styles.cardioP}>{`Cardio `}</p>
              <p className={styles.exerciseP}>Exercise</p>
            </div>
            <div className={styles.subtitleDiv}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={styles.buttonRowDiv}>
              <button className={styles.button} onClick={onButtonClick}>
                <div className={styles.getStartedDiv}>Get Started</div>
              </button>
              <button className={styles.button1} onClick={onButton1Click}>
                <div className={styles.getStartedDiv}>Preview</div>
              </button>
            </div>
          </div>
        </div>
        <img className={styles.heroImageIcon} alt="" src="../vector@2x.png" />
      </div>
      <div
        className={styles.popularExercisesSectionDiv}
        data-scroll-to="popularExercisesSectionContainer"
      >
        <div className={styles.popularExercisesDiv}>
          <div className={styles.titleDiv1}>
            <div className={styles.liftingDiv}>Popular Exercises</div>
            <div className={styles.sEEMOREEXERCISES}>SEE MORE EXERCISES</div>
          </div>
          <div className={styles.exerciseCardsDiv}>
            <div className={styles.column1Div}>
              <div className={styles.exerciseCardDiv}>
                <img
                  className={styles.cardImageIcon}
                  alt=""
                  src="../cardimage@2x.png"
                />
                <div className={styles.textDiv}>
                  <div className={styles.titlesDiv}>
                    <div className={styles.liftingDiv}>Treadmill</div>
                    <div
                      className={styles.subtitlesDiv}
                    >{`250 est calories `}</div>
                  </div>
                  <div className={styles.durationDiv}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="../rectangle-10.svg"
                    />
                    <div className={styles.div}>58:24</div>
                  </div>
                </div>
              </div>
              <div className={styles.exerciseCardDiv}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../image@2x.png"
                />
                <div className={styles.textDiv}>
                  <div className={styles.titlesDiv}>
                    <div className={styles.liftingDiv}>Running</div>
                    <div
                      className={styles.subtitlesDiv}
                    >{`250 est calories `}</div>
                  </div>
                  <div className={styles.durationDiv}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="../rectangle-10.svg"
                    />
                    <div className={styles.div}>58:24</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column1Div}>
              <div className={styles.exerciseCardDiv2}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../cardimage1@2x.png"
                />
                <div className={styles.textDiv}>
                  <div className={styles.titlesDiv}>
                    <div className={styles.liftingDiv}>Stretching</div>
                    <div
                      className={styles.subtitlesDiv}
                    >{`250 est calories `}</div>
                  </div>
                  <div className={styles.durationDiv}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="../rectangle-102.svg"
                    />
                    <div className={styles.div}>58:24</div>
                  </div>
                </div>
              </div>
              <div className={styles.exerciseCardDiv}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../group-6@2x.png"
                />
                <div className={styles.textDiv}>
                  <div className={styles.titlesDiv}>
                    <div className={styles.liftingDiv}>Lifting</div>
                    <div
                      className={styles.subtitlesDiv}
                    >{`250 est calories `}</div>
                  </div>
                  <div className={styles.durationDiv}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="../rectangle-102.svg"
                    />
                    <div className={styles.div}>58:24</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column1Div}>
              <div className={styles.exerciseCardDiv2}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../group-61@2x.png"
                />
                <div className={styles.textDiv}>
                  <div className={styles.titlesDiv}>
                    <div className={styles.liftingDiv}>Yoga</div>
                    <div
                      className={styles.subtitlesDiv}
                    >{`250 est calories `}</div>
                  </div>
                  <div className={styles.durationDiv}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="../rectangle-104.svg"
                    />
                    <div className={styles.div}>58:24</div>
                  </div>
                </div>
              </div>
              <div className={styles.exerciseCardDiv}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../group-62@2x.png"
                />
                <div className={styles.textDiv}>
                  <div className={styles.titlesDiv}>
                    <div className={styles.liftingDiv}>Pushup</div>
                    <div
                      className={styles.subtitlesDiv}
                    >{`250 est calories `}</div>
                  </div>
                  <div className={styles.durationDiv}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="../rectangle-104.svg"
                    />
                    <div className={styles.div}>58:24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.trainersDiv} data-scroll-to="trainersContainer">
        <div className={styles.trainersCTADiv}>
          <div className={styles.cTAFrameDiv}>
            <div className={styles.backgroundDiv} />
            <div className={styles.titleDiv5}>
              <h2 className={styles.workoutProgramMadeForYou}>
                <p className={styles.cardioP}>Workout</p>
                <p className={styles.cardioP}>Program</p>
                <p className={styles.cardioP}>Made</p>
                <p className={styles.exerciseP}>For You</p>
              </h2>
              <img className={styles.splashIcon} alt="" src="../splash.svg" />
            </div>
            <div className={styles.descriptionDiv}>
              <div className={styles.loremIpsumDolorSitAmetCo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                consectetur adipiscing.
              </div>
              <button className={styles.button2} onClick={onButton2Click}>
                <div className={styles.getStartedDiv1}>Get Started</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.trainersImagesDiv}>
          <div className={styles.desktopDiv}>
            <div className={styles.trainer3Div}>
              <img
                className={styles.groupIcon3}
                alt=""
                src="../group-142@2x.png"
              />
              <div className={styles.samanthaWilliamDiv}>Samantha William</div>
              <div className={styles.trainerDiv}>Trainer</div>
            </div>
            <div className={styles.trainer2Div}>
              <img
                className={styles.groupIcon3}
                alt=""
                src="../group-147@2x.png"
              />
              <div className={styles.samanthaWilliamDiv}>Karen Summer</div>
              <div className={styles.trainerDiv}>Trainer</div>
            </div>
            <div className={styles.trainer1Div}>
              <img
                className={styles.groupIcon5}
                alt=""
                src="../group-146@2x.png"
              />
              <div className={styles.jonathanWiseDiv}>Jonathan Wise</div>
              <div className={styles.trainerDiv2}>Trainer</div>
            </div>
          </div>
          <div className={styles.tabletDiv}>
            <div className={styles.trainer3Div1}>
              <img
                className={styles.groupIcon6}
                alt=""
                src="../group-1471@2x.png"
              />
              <div className={styles.karenSummerDiv1}>Karen Summer</div>
              <div className={styles.trainerDiv3}>Trainer</div>
            </div>
            <div className={styles.trainer2Div1}>
              <img
                className={styles.groupIcon7}
                alt=""
                src="../group-1461@2x.png"
              />
              <div className={styles.jonathanWiseDiv1}>Jonathan Wise</div>
              <div className={styles.trainerDiv4}>Trainer</div>
            </div>
            <div className={styles.trainer1Div1}>
              <img
                className={styles.groupIcon8}
                alt=""
                src="../group-1421@2x.png"
              />
              <div className={styles.samanthaWilliamDiv1}>Samantha William</div>
              <div className={styles.trainerDiv5}>Trainer</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.categoriesSectionDiv}>
        <div className={styles.popularExercisesDiv}>
          <div className={styles.categoryDiv}>
            <div className={styles.div6}>01</div>
            <div className={styles.actionDiv}>
              <div className={styles.titlesDiv3}>
                <div className={styles.titleDiv6}>Workout at Home</div>
                <div className={styles.coursesDiv}>15 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="../arrow.svg" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="../separator.svg" />
          <div className={styles.categoryDiv}>
            <div className={styles.div6}>02</div>
            <div className={styles.actionDiv}>
              <div className={styles.titlesDiv3}>
                <div className={styles.titleDiv6}>Stay Strong and Fit</div>
                <div className={styles.coursesDiv}>48 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="../arrow.svg" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="../separator.svg" />
          <div className={styles.categoryDiv}>
            <div className={styles.div6}>03</div>
            <div className={styles.actionDiv}>
              <div className={styles.titlesDiv3}>
                <div className={styles.titleDiv6}>High Intensity</div>
                <div className={styles.coursesDiv}>48 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="../arrow.svg" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="../separator.svg" />
          <div className={styles.categoryDiv}>
            <div className={styles.div6}>04</div>
            <div className={styles.actionDiv}>
              <div className={styles.titlesDiv3}>
                <div className={styles.titleDiv6}>Simple Workout</div>
                <div className={styles.coursesDiv}>48 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="../arrow.svg" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="../separator.svg" />
          <div className={styles.categoryDiv}>
            <div className={styles.div6}>05</div>
            <div className={styles.actionDiv}>
              <div className={styles.titlesDiv3}>
                <div className={styles.titleDiv6}>Burn Calories</div>
                <div className={styles.coursesDiv}>48 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="../arrow.svg" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="../separator.svg" />
        </div>
      </div>
      <div className={styles.subscribeDiv}>
        <div className={styles.subscribeFormDiv}>
          <div className={styles.titleDiv11}>Get the Newsletter</div>
          <form
            className={styles.form}
            action="https://www.locofy.ai"
            method="post"
            id="formID"
          >
            <input className={styles.input} type="text" placeholder="Email" />
            <button
              className={styles.button3}
              type="submit"
              form="formID"
              onClick={onButton3Click}
            >
              <div className={styles.getStartedDiv1}>Subscribe</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FitnessLandingPage;
