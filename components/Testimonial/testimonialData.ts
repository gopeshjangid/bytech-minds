import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Kamil",
    designation: "Blockchain & Web3 App Development",
    image: image1,
    content:
      "Bytech Minds has been instrumental in helping us design and deploy robust blockchain and Web3 applications. Their expertise ensured seamless implementation, exceeding our expectations.",
  },
  {
    id: 2,
    name: "Verga Tech",
    designation: "Ticketing & Event Management Solutions",
    image: image2,
    content:
      "We collaborated with Bytech Minds to develop our event management platform. Their innovative solutions and technical acumen brought our vision to life with exceptional results.",
  },
  {
    id: 3,
    name: "Comboware",
    designation: "Cloud Resource Management Platform",
    image: image1,
    content:
      "Working with Bytech Minds has been a game changer. Their cloud platform solutions streamlined our resource management, enabling us to scale effortlessly and efficiently.",
  },
];

export default testimonialData;
