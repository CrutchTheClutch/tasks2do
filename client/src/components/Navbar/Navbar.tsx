import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaTasks } from 'react-icons/fa';
import { IoMdAdd, IoMdSettings } from 'react-icons/io';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import { ApolloError } from 'apollo-boost';
import CustomButton from '../CustomButton';
import SettingsMenu from '../SettingsMenu/SettingsMenu';
import './Navbar.scss';


const USER_NAME_QUERY = gql`
  query UserNameQuery {
    user(id:"5cd7f0d68ec310afd9a2f7a5") {
      id
      name
    }
  }
`;

const CREATE_DUMMY_TASK_MUTATION = gql`
  mutation CreateDummyTaskMutation($name: String!, $dueDate: String) {
    createTask(name: $name, dueDate: $dueDate) {
      id
    }
  }
`;

interface Props {
  name?: string;
  dueDate?: string;
  loggedIn: boolean;
  nightMode: boolean;
  updateTheme: Function;
}

interface State {
  isOpen: boolean;
}

class Navbar extends Component<Props, State> {
  static propTypes = {
    name: PropTypes.string, // Dummy Value
    dueDate: PropTypes.string, // Dummy Value
    loggedIn: PropTypes.bool.isRequired,
    nightMode: PropTypes.bool.isRequired,
    updateTheme: PropTypes.func.isRequired,
  };

  static defaultProps = {
    name: 'New Task!', // Dummy Value
    dueDate: '1557681923261', // Dummy Value
  };

  constructor(props: Props) {
    super(props);
    this.toggleSettingsMenu = this.toggleSettingsMenu.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggleSettingsMenu() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { name, dueDate, loggedIn, nightMode, updateTheme } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="navbar align-items-center">
        <div className="col-7 col-sm-3 col-md-3 p-0">
          <div className="logo">
            <FaTasks className="icon" />
            <div className="brandName d-inline-block align-middle">tasks2do</div>
          </div>
        </div>
        <div className="d-none d-sm-block col-sm-6 col-md-6 p-0" />
        <div className="col-5 col-sm-3 col-md-3 p-0 text-right">
          {loggedIn ? (
            <Mutation mutation={CREATE_DUMMY_TASK_MUTATION} variables={{ name, dueDate }}>
              {(createDummyTaskMutation: Function) => (
                <CustomButton
                  content={
                    <IoMdAdd className="icon" />
                  }
                  onClick={createDummyTaskMutation}
                />
              )}
            </Mutation>

          ) : (
              null
            )}
          <CustomButton
            content={
              <IoMdSettings className="icon" />
            }
            onClick={this.toggleSettingsMenu}
          />
          <Query query={USER_NAME_QUERY}>
            {({ loading, error, data }: { loading: boolean; error?: ApolloError; data: any; }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) return <h4>Error</h4>;
              return (
                <SettingsMenu
                  isOpen={isOpen}
                  loggedIn={loggedIn}
                  nightMode={nightMode}
                  updateTheme={updateTheme}
                  userName={data.user.name}
                />
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default Navbar;
