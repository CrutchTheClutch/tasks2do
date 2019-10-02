import * as React from 'react';
import { Query } from 'react-apollo';
import { ApolloError } from 'apollo-boost';
import { USER_NAME_QUERY } from '../../graphql/queries';

interface Props {
  children: JSX.Element;
}

export interface UserNameQueryProps {
  loading: boolean;
  error?: ApolloError;
  data: {
    user: {
      id: string;
      name: string;
    };
  };
}

class UserNameQuery extends React.Component<Props> {
  public render(): JSX.Element {
    const { children } = this.props;

    return (
      <Query query={USER_NAME_QUERY}>
        {({ loading, error, data }: UserNameQueryProps): JSX.Element => {
          return React.cloneElement(children as React.ReactElement, {
            loading,
            error,
            data,
          });
        }}
      </Query>
    );
  }
}

export default UserNameQuery;
