import Modal from "../../ui/Modal";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";

const Settings = () => {

  return (
    <>
      <Modal
        animation={false}
        header={
            <div className="text-xl flex flex-col gap-2 w-full text-center">
              <p>Settings</p>
              <hr />
            </div>
          }
        show={true}
        maxWidth="25rem"
      >
        <div className="px-5">
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Private Account"
            />
            <FormControlLabel
              control={<Switch />}
              label="Notifications" 
            />
            <FormControlLabel
              control={<Switch />}
              label="News Emails"
            />
          </FormGroup>
        </div>
      </Modal>
    </>
  );
};

export default Settings;