import { Fragment, useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Restore, AddAPhoto } from "@material-ui/icons";
import { LinksModels } from "./assets/mockData";

const App = () => {
  const [modelSelected, setModelSelected] = useState(LinksModels[0]);

  const onSelectModel = (linkModelSelected) => {
    console.log(linkModelSelected);
    setModelSelected(linkModelSelected);
  };

  return (
    <Fragment>
      <model-viewer
        src={modelSelected} // AR Android/Web
        // ios-src='' // AR iOS
        auto-rotate
        camera-controls
        style={{ width: "100%", height: "800px" }}
      >
        <BottomNavigation>
          {LinksModels.map((link) => {
            return (
              <BottomNavigationAction
                label="Recents"
                icon={<Restore />}
                onClick={() => onSelectModel(link)}
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
