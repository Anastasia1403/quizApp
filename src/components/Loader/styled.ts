import styled, { keyframes } from "styled-components";

const PLANET_RADIUS = 20;

const rotatePlanet = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotate =(startAngle: number) => keyframes`
  from {
    transform: translate(-50%, -50%) rotate(${startAngle}deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(${startAngle + 360}deg);
  }
`;

export const Overlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
`

export const PlanetWrapper = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: ${PLANET_RADIUS * 2}px;
    height: ${PLANET_RADIUS * 2}px;
    
    svg {
        animation: ${rotatePlanet} 7s linear infinite;
        width: 100%;
        height: auto;
    }
    
`
export const Orbit = styled.div<{diameter: number, orbitRadius: number, startAngle: number, time: number}>`
      position: absolute;
      width: ${({ orbitRadius }) => orbitRadius*2}px;
      height: ${({ orbitRadius }) => orbitRadius*2}px;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      border: 1px solid white;
      animation: ${({ startAngle}) => rotate(startAngle)} ${({ time}) =>time + 's'} linear infinite;
      div {
        position: absolute;
        width: ${({ diameter }) => diameter}px;
        height: ${({ diameter }) => diameter}px;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 0;
        transform-origin: ${({ orbitRadius }) => orbitRadius + 'px ' } 0;
      }
`