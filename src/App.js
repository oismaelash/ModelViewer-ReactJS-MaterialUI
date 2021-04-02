import { Fragment, useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Restore, AddAPhoto } from "@material-ui/icons";
import { jsonMock } from "./assets/mockData";

const App = () => {
  const [modelGLB, setModelGLB] = useState(jsonMock.linksGLB[0]);
  const [modelUSDZ, setModelUSDZ] = useState(jsonMock.linksUSDZ[0]);

  const onSelectModel = (glb, usdz) => {
    setModelGLB(glb);
    setModelUSDZ(usdz);
  };

  return (
    <Fragment>
      <model-viewer
        ar
        modes="scene-viewer quick-look webxr"
        src={modelGLB} // AR Android/Web
        ios-src={modelUSDZ} // AR iOS
        auto-rotate
        camera-controls
        style={{ width: "100vw", height: "90vh" }}
      >
        <BottomNavigation>
          {jsonMock.linksGLB.map((link, index) => {
            return (
              <BottomNavigationAction
                key={index}
                showLabel={true}
                label={`model ${index + 1}`}
                icon={<Restore />}
                onClick={() =>
                  onSelectModel(
                    jsonMock.linksGLB[index],
                    jsonMock.linksUSDZ[index]
                  )
                }
              />
            );
          })}
          {/* <button slot="ar-button">
            <BottomNavigationAction
              showLabel={true}
              label="View AR"
              icon={<AddAPhoto />}
            />
          </button> */}
        </BottomNavigation>
      </model-viewer>
    </Fragment>
  );
};

export default App;
