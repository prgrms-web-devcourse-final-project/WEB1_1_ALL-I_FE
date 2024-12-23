import styled from "styled-components";
import Slider from "react-slick";

export const SliderContainer = styled(Slider)`
  .slick-list {
    overflow: hidden;
  }

  .slick-slide {
    padding: 10px 20px;
  }

  .slick-track {
    margin-left: 0;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`;

export const ProfileCircle = styled.div`
  width: 55px;
  height: 55px;
  background-color: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-medium);
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProfileName = styled.div`
  margin-top: 8px;
  font-size: var(--font-size-small);
  color: #333;
  text-align: center;
  width: 100%;
  cursor: pointer;
`;

export const Text = styled.div`
  color: var(--color-black);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-medium);
`;

export const IconWrapper = styled.div`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--icon-size-group-2);
  height: var(--icon-size-group-2);

  &:hover {
    transform: scale(1.1);
    transition: transform 0.25s ease;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
