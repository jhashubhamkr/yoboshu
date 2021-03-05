import React, { Component } from "react";
import BasicDescription from "./BasicDescription";
import CircleListDescription from "./CircleListDescription";
import ListDescription from "./ListDescription";
import DescriptionBanner from "./DescriptionBanner";
import WithIconDescription from "./WithIconDescription";
import PricingComponent from "./PricingComponent";
import CustomSlider from "./CustomSlider";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basicDetails: {
        name: "Suraj Kumar",
        experience: "5+",
        feePerSession: "150",
        currency: "₹",
        certified: true,
      },
      about:
        "I am a professional personal fitness trainer and I am here to make you workout at home. You know that everyone is busy these days and no one has time for his body and health. That is why we have come to get you workouts from your home. So please contact us.",
      expertise: ["GYM", "YOGA", "BOXING", "TAEKWONDO", "SPORTS TRAINER"],
      medicalExperience: [
        "Injury",
        "Smoking Addiction",
        "Anxiety",
        "Drinking",
        "Addiction",
        "Lung Disease",
      ],
      location: "Amritsar, Punjab",
      modeOfTraining: { online: true, home: true, outdoors: true },
      availability: [
        "6:00 AM TO 7:00 AM",
        "10:30 AM TO 11:30 AM",
        "11:00 AM TO 12:00 PM",
        "12:28 PM TO 1:28 PM",
        "1:00 PM TO 2:00 PM",
        "2:30 PM TO 3:30 PM",
      ],
      trainingDays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      languages: ["Hindi", "English", "Punjabi"],
      education: "B.Sc in Sport and Exercise Science",
      people: [
        "ACTORS",
        "MODEL",
        "MEN",
        "YOUTH",
        "BODYBUILDERS",
        "SPECIALLY ABLE",
        "WOMEN",
        "BEGINNERS",
        "OVERWEIGHT",
        "OVERWEIGHT/OBESE",
        "BRIDE TO BE",
        "WOMEN PRE-MENOPAUSE",
      ],
      pricing: [
        {
          plan: "starter plan",
          sessions: 5,
          perSession: 150,
          save: 0,
        },
        {
          plan: "Popular plan",
          sessions: 12,
          perSession: 138,
          save: 8,
        },
        {
          plan: "best value plan",
          sessions: 24,
          perSession: 127,
          save: 15,
        },
      ],
      images:[
        "https://get.pxhere.com/photo/white-photograph-people-yellow-photography-smile-fun-tree-vacation-plant-portrait-photography-leisure-happy-photo-shoot-1575009.jpg",
        "https://cdn.stocksnap.io/img-thumbs/960w/people-woman_LBRE9R9NTN.jpg",
        "https://st.depositphotos.com/1010710/3382/i/950/depositphotos_33823731-stock-photo-crouching-boxer.jpg"
      ]
    };
  }

  render() {
    const locationData = [
      {
        icon: "map-marker-alt",
        item: this.state.location,
      },
    ];
    const trainingData = [];
    if (this.state.modeOfTraining.online) {
      trainingData.push({ icon: "globe-asia", item: "Online (Google Meet)" });
    }
    if (this.state.modeOfTraining.home) {
      trainingData.push({ icon: "home", item: "Home" });
    }
    if (this.state.modeOfTraining.outdoors) {
      trainingData.push({ icon: "tree", item: "Outdoors" });
    }
    const languageData = [];
    this.state.languages.forEach((lang) => {
      languageData.push({ icon: "globe", item: lang });
    });
    return (
      <div>
        <div className="slider">
          <CustomSlider images={this.state.images}/>
        </div>
        <div className="main">
          <DescriptionBanner
            data={this.state.basicDetails}
          />
          <hr />
          <BasicDescription title="About me" data={this.state.about} />
          <hr />
          <CircleListDescription
            title="My Expertise"
            data={this.state.expertise}
          />
          <hr />
          <ListDescription
            title="Medical Condition Experience"
            data={this.state.medicalExperience}
          />
          <hr />
          <WithIconDescription title="My Location" data={locationData} />
          <hr />
          <WithIconDescription title="Mode of Training" data={trainingData} />
          <hr />
          <PricingComponent title="1-on-1 Pricing" data={this.state.pricing} />
          <hr />
          <CircleListDescription
            title="Availability"
            data={this.state.availability}
          />
          <hr />
          <ListDescription
            title="Training Days"
            data={this.state.trainingDays}
          />
          <hr />
          <WithIconDescription title="Languages" data={languageData} />
          <hr />
          <BasicDescription
            title="Educational Qualification"
            data={this.state.education}
          />
          <hr />
          <CircleListDescription
            title="People I love training with"
            data={this.state.people}
          />
          <hr />
        </div>
        <div className="bottom">
          <button className="btn btn-plain">
            JOIN BOOTCAMP
          </button>
          <button className="btn btn-gradient">
            BOOK NOW
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
