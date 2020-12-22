import React from "react";
import Star from "./Star";
import availableStar from "../../images/star-outline.png";
import earnedStar from "../../images/star.png";

export default {
  title: "Example/Star",
  component: Star,
  argTypes: {},
};

const Template = () => <Star />;

export const Available = Template.bind({});
Available.args = {
  starSource: availableStar,
};

export const Earned = Template.bind({});
Earned.args = {
  starSource: earnedStar,
};
