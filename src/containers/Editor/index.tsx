import React from 'react';
import { Redirect, useLocation } from '@reach/router';
import { parse } from 'query-string'

import { ProjectProvider } from 'providers/Project';
import CadenceChecker from 'providers/CadenceChecker';

import EditorLayout from './layout';
import { Base } from 'layout/Base';
import { LOCAL_PROJECT_ID } from 'util/url';

const Playground: any = (props: any) => {
  const { projectId } = props;
  const isLocalProject = projectId === LOCAL_PROJECT_ID;

  const location = useLocation();
  const reqParam = parse(location.search);
  const contract = reqParam.contract === undefined ? null : reqParam.contract;


  if (!projectId) {
    return <Redirect noThrow to={`/${LOCAL_PROJECT_ID}`} />;
  }

  return (
    <Base>
      <ProjectProvider urlProjectId={isLocalProject ? null : projectId} contract={contract}>
        <CadenceChecker>
          <EditorLayout />
        </CadenceChecker>
      </ProjectProvider>
    </Base>
  );
};

export default Playground;
