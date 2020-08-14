import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserAccount from 'components/views/userSettings/UserAccount';
import CreateGroup from 'components/views/create-group/createGroup';
import GroupsOverview from 'components/views/groupsOverview';
import SettingsView from 'components/views/SettingsView';
import PipelinesExecutionView from 'components/views/PipelinesExecutionView';
import ResetPasswordView from 'components/views/ResetPassword/ResetPasswordView';
import FileView from './components/fileView/fileView';
import Login from './components/login/login';
import RegisterView from './components/RegisterView';
import projectView from './components/projectView/projectView';
import PrivateRoute from './privateRoute';
import Explore from 'components/views/Explore';
import ExperimentsOverview from './components/experiments-overview/ExperimentOverview';
import Projects from './components/myProjects/myProjects';
import Commits from './components/commits-view/commitsView';
import CommitDetails from './components/commits-details/commitDetails';
import DataInstanceOverview from './components/data-instance/dataInstanceOverview';
import DataInstanceDetails from './components/data-instance/dataInstanceDetails';
import DataVisualizationOverview from './components/data-visualization/dataVisualizationOverview';
import ErrorPage from './components/error-page/errorPage';
import ExperimentDetails from './components/experiment-details/experimentDetails';
import CreateProject from './components/views/create-project/createProject';
import NewMergeRequest from './components/new-merge-request/newMergeRequest';
import NewBranch from './components/views/NewBranch';
import BranchesView from './components/branches-list-view/branchesView';
import mergeRequestOverview from './components/new-merge-request/merge-request-overview';
import BasicMergeRequestView from './components/mergeRequestDetailView/basicMergeRequestView';
import UserProfile from './components/userProfile/userProfile';
import UploadFile from './components/views/uploadFile/uploadFile';
import DataVisualizationDetail from './components/data-visualization/dataVisualizationDetail';
import ForkView from './components/ForkView';
import Insights from './components/insights/insights';
// this is component for testing layout and should be removed after alpha
import Demo from './components/Demo';

const RouterComp = () => (
  <BrowserRouter>
    <Switch>
      {/* this is a route for testing layout and should be removed after alpha */}
      <Route path="/demo" exact component={Demo} />
      <Route path="/login" exact component={Login} />
      <Route path="/index.html" exact component={Login} />
      <Route path="/register" exact component={RegisterView} />
      <Route path="/user/reset-password" exact component={ResetPasswordView} />
      <Route path="/error-page" exact component={ErrorPage} />
      <Route path="/explore" exact component={Explore} />

      <PrivateRoute path="/" exact component={Projects} />
      <PrivateRoute path="/perms/owner" owneronly exact component={Projects} />
      <PrivateRoute path="/perms/role" minRole={20} exact component={Projects} />
      <PrivateRoute path="/perms/account" accountType={1} exact component={Projects} />

      <PrivateRoute path="/my-projects" exact component={Projects} />
      <PrivateRoute exact path="/groups/new" component={CreateGroup} />
      <PrivateRoute exact path="/groups" component={GroupsOverview}/>
      <PrivateRoute exact path="/profile" component={UserAccount} />
      <PrivateRoute path="/:user" exact component={UserProfile} />
      <PrivateRoute path="/new-project/classification/:classification" exact component={CreateProject} />
      <PrivateRoute path="/my-projects/:projectId/:branch/commits/:pathParam?" exact component={Commits} />
      <PrivateRoute
        path="/my-projects/:projectId/insights/-/jobs/:logId"
        component={Insights}
      />
      <PrivateRoute
        path="/my-projects/:projectId/insights/-/jobs"
        exact
        component={Insights}
      />
      <PrivateRoute
        exact
        path="/my-projects/:projectId/upload-file"
        component={UploadFile}
      />
      <PrivateRoute
        exact
        path="/my-projects/:projectId/:branch(.+)/upload-file"
        component={UploadFile}
      />
      <Route path="/:namespace/:slug" component={projectView} exact />
      <Route path="/:namespace/:slug/-/tree/:branch/:path(.+)" component={projectView} />
      <Route path="/:namespace/:slug/-/tree/:branch" component={projectView} />
      <Route path="/:namespace/:slug/-/blob/:branch/:file(.+)" component={FileView} />
      <PrivateRoute path="/:namespace/:slug/-/settings" exact component={SettingsView} />

      <Route path="/:namespace/:slug/-/experiments" exact component={ExperimentsOverview} />
      <PrivateRoute path="/:namespace/:slug/-/experiments/new" component={PipelinesExecutionView} newExperiment />
      <Route path="/:namespace/:slug/-/datasets" exact component={DataInstanceOverview} />
      <PrivateRoute path="/:namespace/:slug/-/datasets/new" component={PipelinesExecutionView} newDataset />
      <Route path="/:namespace/:slug/-/visualizations" exact component={DataVisualizationOverview} />
      <PrivateRoute path="/:namespace/:slug/-/visualizations/new" component={PipelinesExecutionView} newVisualization />
      <Route path="/:namespace/:slug/-/branches" component={BranchesView} exact />
      <Route path="/:namespace/:slug/-/branches/new" component={NewBranch} />
      <Route path="/:namespace/:slug/-/merge_requests" component={mergeRequestOverview} exact />
      <Route path="/:namespace/:slug/-/merge_requests/new" component={NewMergeRequest} />
      <Route path="/:namespace/:slug/merge_requests/new" component={NewMergeRequest} />
      <Route path="/:namespace/:slug/-/merge_requests/:iid" exact component={BasicMergeRequestView} />
      <Route path="/:namespace/:slug/-/datasets" component={DataInstanceOverview} />
      <Route path="/:namespace/:slug/-/datasets/:branch/:dataId/path/:path" component={DataInstanceDetails} />
      <Route path="/:namespace/:slug/-/datasets/:branch/:dataId" component={DataInstanceDetails} />

      <PrivateRoute exact path="/my-projects/:namespace/:slug/pipeline-execution/:typePipelines" component={PipelinesExecutionView} />
      <PrivateRoute path="/my-projects/:projectId/visualizations/:visName/path/:path" component={DataVisualizationDetail} />
      <PrivateRoute path="/my-projects/:projectId/visualizations/:visName" component={DataVisualizationDetail} />
      <PrivateRoute path="/my-projects/:projectId/visualizations" component={DataVisualizationOverview} />
      <PrivateRoute exact path="/my-projects/:namespace/:slug/-/datasets" component={DataInstanceOverview} />
      <PrivateRoute path="/my-projects/:projectId/:branch/-/datasets/:dataId/path/:path" component={DataInstanceDetails} />
      <PrivateRoute path="/my-projects/:projectId/:branch/-/datasets/:dataId" component={DataInstanceDetails} />
      <PrivateRoute path="/my-projects/:projectId/fork" component={ForkView} />
      <PrivateRoute
        path="/my-projects/:namespace/:slug/-/experiments"
        exact
        component={ExperimentsOverview}
      />
      <PrivateRoute path="/my-projects/:projectId/-/experiments/:experimentId" exact component={ExperimentDetails} />
      <PrivateRoute
        path="/my-projects/:projectId/:branch/blob/:file"
        component={FileView}
      />
      <PrivateRoute path="/my-projects/:projectId/:branch/path/:path" component={projectView} />
      <PrivateRoute path="/my-projects/:projectId/commit/:commitId" exact component={CommitDetails} />
      <PrivateRoute
        exact
        path="/my-projects/:projectId/merge-requests/overview"
        component={mergeRequestOverview}
      />
      <PrivateRoute
        exact
        path="/my-projects/:projectId/merge-requests/:iid"
        component={BasicMergeRequestView}
      />
      <PrivateRoute
        exact
        path="/my-projects/:projectId/:branch/new-merge-request"
        component={NewMergeRequest}
      />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default RouterComp;
