import * as React from 'react';
import { FaTasks } from 'react-icons/fa';
import { IoMdAdd, IoMdSettings } from 'react-icons/io';
import UserNameQuery from '../../providers/UserNameQuery';
import CustomButton from '../CustomButton';
import SettingsMenu from '../SettingsMenu';
import './Navbar.scss';

interface Props {
  name?: string;
  dueDate?: string;
  toggleAddTask: Function;
  loggedIn: boolean;
  nightMode: boolean;
  updateTheme: Function;
}

interface State {
  isOpen: boolean;
}

class Navbar extends React.Component<Props, State> {
  public static defaultProps = {
    name: 'New Task!', // Dummy Value
    dueDate: '1557681923261', // Dummy Value
  };

  public constructor(props: Props) {
    super(props);
    this.toggleSettingsMenu = this.toggleSettingsMenu.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  public toggleSettingsMenu(): void {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  public render(): JSX.Element {
    const { loggedIn, nightMode, updateTheme, toggleAddTask } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="navbar align-items-center">
        <div className="col-7 col-sm-3 col-md-3 p-0">
          <div className="logo">
            <FaTasks className="icon" />
            <div className="brandName d-inline-block align-middle">
              tasks2do
            </div>
          </div>
        </div>
        <div className="d-none d-sm-block col-sm-6 col-md-6 p-0" />
        <div className="col-5 col-sm-3 col-md-3 p-0 text-right">
          {loggedIn ? (
            <CustomButton
              content={<IoMdAdd className="icon" />}
              onClick={toggleAddTask}
            />
          ) : null}
          <CustomButton
            content={<IoMdSettings className="icon" />}
            onClick={this.toggleSettingsMenu}
          />
          <UserNameQuery>
            <SettingsMenu
              isOpen={isOpen}
              loggedIn={loggedIn}
              nightMode={nightMode}
              updateTheme={updateTheme}
            />
          </UserNameQuery>
        </div>
      </div>
    );
  }
}

export default Navbar;
