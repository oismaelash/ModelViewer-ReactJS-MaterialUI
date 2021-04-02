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
        src={modelGLB} // AR Android/Web
        ios-src={modelUSDZ} // AR iOS
        auto-rotate
        camera-controls
        style={{ width: "100%", height: "800px" }}
      >
        <BottomNavigation>
          {jsonMock.linksGLB.map((link, index) => {
            return (
              <BottomNavigationAction
                label="Recents"
                icon={<Restore />}
                onClick={() => onSelectModel(jsonMock.linksGLB[index], jsonMock.linksUSDZ[index])}
              />
            );
          })}
          <BottomNavigationAction
            label="Recents"
            icon={<AddAPhoto />}
            slot="ar-button"
          />
        </BottomNavigation>
      </model-viewer>
    </Fragment>
  );
};

export default App;
