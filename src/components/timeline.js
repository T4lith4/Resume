import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
//heading animation
import Zoom from "react-reveal/Zoom";
//timeline component
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
//stylesheet
import "../App.css";

/*This is my timeline component. Studies and Jobs have different styles associated with them */

class ProLine extends Component {
  render() {
    return (
      <div className="timeline-grid">
        <Grid>
          <Cell col={12}>
            <Zoom>
              <h3 id="timeline">Timeline</h3>
            </Zoom>
            <hr className="line" />
            <Timeline lineColor={"#ddd"}>
              <TimelineItem
                key="001"
                dateText="April - October 2019"
                style={{ color: "#e86971" }}
              >
                <h4>Full Stack Web Developer Bootcamp </h4>
                <h5>Hyperion Dev</h5>
                <ul>
                  <li>
                    Learnt HTML, CSS, JavaScript, MongoDB, Express, React,
                    Node.js, Next.js.{" "}
                  </li>
                  <li>
                    {" "}
                    Developed and designed dynamic web applications using the
                    above technology stack.{" "}
                  </li>
                  <li>
                    Applied Agile development and product design principles to
                    web development projects.
                  </li>
                  <li>
                    Understood crucial software algorithms, and their
                    application to web development.{" "}
                  </li>
                  <li>Created databases and data-driven web applications.</li>
                </ul>
              </TimelineItem>

              <TimelineItem
                key="002"
                dateText=" November 2018 - March 2019"
                style={{ color: "#e86971" }}
              >
                <h4>Responsive Web Design Certificate</h4>
                <h5>FREECODECAMP</h5>
                <ul>
                  <li>
                    Learnt HTML and CSS in the scope of Applied Visual Design{" "}
                  </li>
                  <li>Developed Web Projects with Applied Accessibility</li>
                  <li>Applied CSS Grid and Flexbox to web applications</li>
                  <li>Understood Web Design Principles </li>
                </ul>
              </TimelineItem>

              <TimelineItem
                key="003"
                dateText="February 2017- Present"
                dateInnerStyle={{ background: "#76bb7f" }}
              >
                <h4>Au Pair</h4>
                <h4>Consafe (Procon Consolidated Marketing)</h4>
                <ul>
                  <li>
                    Ensuring safe transportation of children home from school
                    and to extra-curricular activities
                  </li>
                  <li>Ensuring safety of children at all times</li>
                  <li>Assisting children with homework</li>
                </ul>
              </TimelineItem>
              <TimelineItem
                key="004"
                dateText="December 16 – February 2017"
                style={{ color: "#e86971" }}
              >
                <h4>Web Development Diploma </h4>
                <h5>Shaw Acedemy</h5>
                <ul>
                  <li>
                    Gained knowledge of the structural difference between
                    websites and web applications
                  </li>
                  <li>
                    {" "}
                    Learnt common web apllication design methodologies, as well
                    as Search Engine Optomization (SEO)
                  </li>
                  <li>
                    Learnt the purpose and function of front-end responsiveness
                    and interaction
                  </li>
                  <li>
                    Understood what the back-end component was ans how it is
                    used to provide dynamic functionality and how it creates
                    databases.
                  </li>
                  <li>
                    Learnt how to bring websites from staging through to a live
                    server.
                  </li>
                </ul>
              </TimelineItem>

              <TimelineItem
                key="005"
                dateText="May 2016 - September 2016"
                dateInnerStyle={{ background: "#76bb7f" }}
              >
                <h4>Guest Relations Officer</h4>
                <h5>Octavia's Day Spa</h5>
                <ul>
                  <li>
                    {" "}
                    Promotion of sales of products and treatments - I always met
                    target
                  </li>
                  <li>Handling customer inquiries</li>
                  <li>Conducting Spa tours</li>
                  <li>
                    Performing scheduling, alterations, cancellation and
                    confirmation of bookings ( via email, phone, or in-person)
                  </li>
                  <li>
                    Submission of booking quotations and spa package promotions
                  </li>
                  <li>Conducting spa cleanliness inspection</li>
                  <li>Processing and serving food and drink orders</li>
                  <li>Completing and reporting end-of-day Cash up</li>
                </ul>
              </TimelineItem>

              <TimelineItem
                key="006"
                dateText="October 2015 - January 2016"
                dateInnerStyle={{ background: "#76bb7f" }}
              >
                <h4>Cabin Attendant</h4>
                <h5>Qatar Airways</h5>
                <ul>
                  <li>Ensuring the safety of all passengers</li>
                  <li>
                    Carrying out of Pref-light checks of Emergency Equipment
                  </li>
                  <li>
                    Conducting Passenger Briefing ( Emergency exits, mothers
                    with infants, wheelchair passengers)
                  </li>
                  <li>
                    Prepared for Emergency Drill, Fire-fighting, First-Aid and
                    Survival Responses
                  </li>
                  <li>Providing In-flight Service</li>
                  <li>Completing Cash-ups of flight service sales</li>
                  <li>Submission of Flight Reports</li>
                  <li>Attending pre-flight briefings with flight crew</li>
                </ul>
              </TimelineItem>

              <TimelineItem
                key="007"
                dateText="June 2014 – October 2015 "
                dateInnerStyle={{ background: "#76bb7f" }}
              >
                <h4>Multi-skilled Contractor</h4>
                <h5>Bid Air Services</h5>
                <h6>
                  Rotating on a monthly basis between Cabin Crew, Call Center
                  and Ground Staff Departments for Mango Airline
                </h6>
                <p>
                  Call Centre Duties:
                  <ul>
                    <li>
                      Handling booking confirmations, alterations and
                      cancellations, as well as customer complaints
                    </li>
                    <li>Assistance with the website</li>
                    <li>Processing payments and quotations for bookings</li>
                  </ul>
                </p>

                <p>
                  Ground Staff Duties:
                  <ul>
                    <li>
                      Allocating seating and issuing of boarding passes for
                      passengers as well as the acceptance of their luggage
                    </li>
                    <li>
                      Assistance of wheelchair, deaf, and blind passengers to
                      their flight
                    </li>
                    <li>
                      Arrival and and departure of passengers through terminals
                    </li>
                  </ul>
                </p>
                <p>
                  Cabin Crew Duties:
                  <ul>
                    <li>Ensuring the safety of all passengers</li>
                    <li>
                      Attending pre-flight briefings with flight crew and
                      submission of flight report after flight
                    </li>
                  </ul>
                </p>
              </TimelineItem>

              <TimelineItem
                key="008"
                dateText="March 2014"
                style={{ color: "#e86971" }}
              >
                <h4>Cabin Crew License</h4>
                <h5>South African Cavil Aviation Authority</h5>
                <ul>
                  <li>Standard, Safety and Emergency Procedures</li>
                  <li>Emergency Equipment, Firefighting and Survival Skills</li>
                  <li>First Aid and Dangerous Goods</li>
                  <li>Aviation Law</li>
                  <li>Aircraft Type Rating on Boeing 737-700</li>
                </ul>
              </TimelineItem>

              <TimelineItem
                key="009"
                dateText="January 2013 - March 2013"
                style={{ color: "#e86971" }}
              >
                <h4>Cabin Crew Abinitio Certificate</h4>
                <h5>Cranfield Aviation Academy</h5>
                <ul>
                  <li>First Aid and Survial Skills</li>
                  <li>Standard, Safety and Emergency Procedures</li>
                  <li>Emergency Equipment, Wet Ditching</li>
                  <li>Dangerous Goods and Aviation Law</li>

                  <li>Aircraft Type Rating on Beoing 737-700</li>
                </ul>
              </TimelineItem>

              <TimelineItem
                key="0010"
               dateText="January - November 2013"
                dateInnerStyle={{ background: "#76bb7f" }}
              >
                <h4>Junior Office Admin</h4>
                <h5>Columbo Engineering CC</h5>
                <p>
                  <ul>
                    <li>Ensured efficient filing</li>
                    <li>Ensured faxing was done</li>
                    <li>
                      Dealt with customer inquiries ( in-person, email, and
                      calls )
                    </li>
                    <li>Processed invoicing</li>
                  </ul>
                </p>
              </TimelineItem>
              
              <TimelineItem
                key="0011"
                dateText="January - November 2012"
                style={{ color: "#e86971" }}
              >
                <h4>Groove Class Drumming Certificate</h4>
                <h5>The Groove Class</h5>
                <ul>
                  <li>
                    Learnt to site-read up to Grade 10 music charts in a variation of music genres
                  </li>
                  <li>
                    Learnt to play percussion instruments for orchestral music
                  </li>
                  <li>
                    Learnt to play different music styles; Latin, Jazz, Reggae, Funk and Contemporary
                  </li>
                </ul>
                </TimelineItem>
                <TimelineItem
                key="0011"
                dateText="November 2011"
                style={{ color: "#e86971" }}
              >
                <h4>National Senior Certificate</h4>
                <h5>The Training Academy</h5>
                <p> I matriculated with a distinction in Mathematical Literacy</p>
                <p>My additional subjects were:</p>
                <ul>
                  <li>
                   Biology
                  </li>
                  <li>
                   Geography
                   </li>
                   <li>
                   Computer Applications Technology
                   </li>
                </ul>
              </TimelineItem>
            </Timeline>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ProLine;
