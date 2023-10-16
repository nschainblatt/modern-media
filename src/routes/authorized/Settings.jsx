import Modal from "../../ui/Modal";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import { useState, useEffect } from "react";

const Settings = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(true);
  }, []);

  return (
    <>
      {isShown
        ? <div className="w-full flex flex-col text-center justify-center align-middle items-center">
            <Modal
              animation={false}
              header={
                  <div className="text-xl flex flex-col gap-2 w-full text-center">
                    <p>Post a new personal record</p>
                    <hr />
                  </div>
                }
              show={isShown}
              onHide={() => setIsShown(false)}
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
          </div>
        : <></>
      }
    </>
  );
};

export default Settings;