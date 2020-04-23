import React, { useEffect, useState } from 'react';
import JobsApi from '../../../apis/JobsApi';
import { toastr } from 'react-redux-toastr';
import JobLog from '../../experiment-details/menu-options/jobLog'

const JobLogById = (props) => {
  const { logId, projectId } = props;
  const [job, setJob] = useState();

  useEffect(() => {
    JobsApi.getJobById(projectId, logId)
      .then((res) => setJob(res))
      .catch(() => {
        toastr.error('Error', 'The job was not found');
      })
  },[projectId, logId]);

  return (
    <>
      <div style={{ width: '80%' }}>
        {job !==undefined && <JobLog projectId={projectId} job={job} />}
      </div>
    </>
  )
};

export default JobLogById;
