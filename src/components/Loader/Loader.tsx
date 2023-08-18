import { Orbit, Overlay, PlanetWrapper } from "./styled";
import { ReactComponent as PlanetIcon } from './icons/PlanetIcon.svg';
import { ReactComponent as YellowSatteliteIcon } from './icons/YellowSatteliteIcon.svg';
import { ReactComponent as RedSatteliteIcon } from './icons/RedSatteliteIcon.svg';
import { ReactComponent as CheezeSatteliteIcon } from './icons/CheezeSatteliteIcon.svg';
 

const sattelitesArray = [
    {
        icon: <YellowSatteliteIcon/>,
        diameter: 12,
        orbitRadius: 30,
        startAngle: 125,
        time: 0.7,
    },
    {
        icon: <RedSatteliteIcon/>,
        diameter: 10,
        orbitRadius: 41,
        startAngle: -100,
        time: 1.2,
    },
    {
        icon: <CheezeSatteliteIcon/>,
        diameter: 18,
        orbitRadius: 60,
        startAngle: 260,
        time: 2.1,
    },
    {
        icon: <RedSatteliteIcon/>,
        diameter: 11,
        orbitRadius: 78,
        startAngle: -125,
        time: 3.7,
    },
    {
        icon: <CheezeSatteliteIcon/>,
        diameter: 16,
        orbitRadius: 109,
        startAngle: 0,
        time: 4.5,
    },
    {
        icon: <YellowSatteliteIcon/>,
        diameter: 13,
        orbitRadius: 150,
        startAngle: 75,
        time: 6,
    },

]
export const Loader = () => {
    return ( 
        <Overlay>
            <PlanetWrapper>
                <PlanetIcon/>
                {sattelitesArray.map((sat) => (
                <Orbit
                    key={sat.orbitRadius}
                    diameter={sat.diameter} 
                    orbitRadius={sat.orbitRadius} 
                    startAngle={sat.startAngle} 
                    time={sat.time}
                >
                    <div>
                        {sat.icon}
                    </div>
                </Orbit>
                ))}
                
            </PlanetWrapper>
        </Overlay>
     );
}
