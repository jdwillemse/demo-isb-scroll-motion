import React, { PureComponent } from "react";
import Waypoint from "react-waypoint";
import { throttle } from "lodash";

import "./ImageBlock.css";

const kickerArray = ["Sparnaður", "Fyrirtækjaþjónusta"];
const titleArray = [
  "Reglu­legur sparn­aður",
  "Ert þú að missa af 2% launa­hækkun?",
  "Úttekt á séreign",
  "Innheimtu­þjón­usta léttir undir"
];
const bodyArray = [
  <div>
    <p className="paragraph large ">
      Með reglulegum sparnaði velur þú fasta upphæð sem leggst sjálfkrafa inn á
      sparnaðarreikning í hverjum mánuði eða fasta upphæð með mánaðarlegum
      kaupum í sjóði. Þú velur hvor aðferðin hentar þér og þínum
      sparnaðarmarkmiðum betur.{" "}
    </p>
    <p className="paragraph large ">
      Þú velur upphæðina og inná hvaða reikninging sparnaðurinn á að fara í
      netbankanum þínum. Millifærslurnar eru sjálfvirkar og sparnaðurinn sér um
      sig sjálfur. Þess vegna er reglubundinn sparnaður ein besta leiðin til að
      leggja fyrir.
    </p>
    <p className="paragraph large ">
      <a
        href="https://www.isb.is/netbank/payments/regularpayments"
        className="default"
        target="_blank"
        rel="noopener"
      >
        Skrá reglulegan sparnað í netbanka
      </a>
    </p>
  </div>,
  <div>
    <p className="paragraph large ">
      Skilvís, innheimtuþjónusta Íslandsbanka, tryggir hagstæða og skilvirka
      innheimtu á viðskiptakröfum sem sparar fyrirtækinu innheimtukostnað og
      tíma.
    </p>
  </div>,
  <div>
    <p className="paragraph large ">
      Hvernig er best að taka út séreignarsparnað?
    </p>
    <p className="paragraph large ">
      Við 60 ára aldur er séreignarsparnaður laus til úttektar en nokkur atriði
      er gott að hafa í huga:
    </p>
    <ul className="bullet-list">
      <li>Úttekt hefur engin áhrif á greiðslur ellilífeyris TR</li>
      <li>
        Tekjuskattur er greiddur við úttekt og því er mikilvægt að skoða í hvaða
        skattþrepi úttektin lendir
      </li>
      <li>Séreign erfist að fullu til maka og barna án erfðafjárskatts</li>
      <li>
        Enginn fjármagnstekjuskattur er greiddur af ávöxtun og hún skerðir ekki
        greiðslur TR
      </li>
      <li>
        Hægt er að taka séreignarsparnaðinn út þó starfsævi sé ekki lokið eða
        geyma til betri tíma
      </li>
    </ul>
  </div>
];

class ImageBlock extends PureComponent {
  componentDidMount() {
    this.elOffset = this.containerEl.offsetTop;
  }

  handleWaypointEnter = props => {
    // if (this.props.index !== 1) return;
    console.log("-----enter", this.props.index);
    window.addEventListener("scroll", this.handleScroll, true);
  };

  handleWaypointLeave = () => {
    window.removeEventListener("scroll", this.handleScroll, true);
  };

  handleScroll = throttle(event => {
    const windowHeight = window.innerHeight;
    const percentageScrolled = (window.scrollY - this.elOffset) / windowHeight;
    const restrictedPercentage = Math.min(Math.max(percentageScrolled, -1), 1);
    // console.log(this.props.index, restrictedPercentage);

    this.imageEl.style.setProperty("--imageOffset", `${restrictedPercentage}%`);
  }, 300);

  render() {
    const random = () => Math.floor(Math.random() * 3);
    const kicker = kickerArray[random()];
    const title = titleArray[random()];
    const body = bodyArray[random()];

    return (
      <Waypoint
        onEnter={this.handleWaypointEnter}
        onLeave={this.handleWaypointLeave}
      >
        <section
          className="standard-block row"
          ref={el => {
            this.containerEl = el;
          }}
        >
          <div className="col-sm-6 image-content-wrap">
            <img
              src={`https://source.unsplash.com/1600x900/?nature,${
                this.props.theme
              }`}
              alt=""
              ref={el => {
                this.imageEl = el;
              }}
            />
          </div>
          <div className="col-sm-6">
            <div className="copy-wrap">
              {kicker && <span className="kicker">{kicker}</span>}
              {title && (
                <h2 className=" title red size-sm-medium size-lg-medium">
                  {title}
                </h2>
              )}
              {body && <div className="text-body">{body}</div>}
            </div>
          </div>
        </section>
      </Waypoint>
    );
  }
}

export default ImageBlock;
