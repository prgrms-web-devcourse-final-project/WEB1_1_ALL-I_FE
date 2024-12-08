import styled from "styled-components";
import Slider from "react-slick";

export const SliderContainer = styled(Slider)`
  .slick-list {
    overflow: hidden;
  }

  .slick-slide {
    padding: 10px;
  }
`;

export const ProfileContainer = styled.div``;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileCircle = styled.div`
  width: 60px;
  height: 60px;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

export const ProfileName = styled.div`
  margin-top: 8px;
  font-size: 1rem;
  color: #333;
  text-align: center;
  width: 100%;
`;
