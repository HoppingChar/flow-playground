import { navigate } from '@reach/router';
import { EntityType } from 'providers/Project';
import { useProject } from 'providers/Project/projectHooks';
import React from 'react';
import { SXStyles } from 'src/types';
import { Flex } from 'theme-ui';
import { isUUUID, LOCAL_PROJECT_ID } from 'util/url';
import MenuList from './MenuList';
import ReadMe from './ReadMe';

const styles: SXStyles = {
  root: {
    display: 'flex',
    flexDirection: 'column',

  },
  header: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: '-0.01em',
    textTransform: 'uppercase',
    color: '#69717E'
  }
}

const FilesList = () => {
    const {
        active,
        project,
        mutator,
        selectedResourceAccount,
        deleteTransactionTemplate,
        deleteScriptTemplate,
        updateTransactionTemplate,
        updateScriptTemplate,
    } = useProject();

    const projectPath = isUUUID(project.id) ? project.id : LOCAL_PROJECT_ID;

    const storageAcct = selectedResourceAccount || 'none';

    return (
        <Flex sx={styles.root}>
            <Flex sx={styles.header} >
                Files
            </Flex>
            <MenuList
                title="Transaction"
                items={project.transactionTemplates}
                active={
                    active.type == EntityType.TransactionTemplate ? active.index : null
                }
                onSelect={(_, id) => {
                    navigate(`/${projectPath}?type=tx&id=${id}&storage=${storageAcct}`);
                }}
                onUpdate={(templateId: string, script: string, title: string) => {
                    updateTransactionTemplate(templateId, script, title);
                }}
                onDelete={async (templateId: string) => {
                    await deleteTransactionTemplate(templateId);
                    const id = project.transactionTemplates[0].id;
                    navigate(`/${projectPath}?type=tx&id=${id}&storage=${storageAcct}`);
                }}
                onInsert={async () => {
                    const res = await mutator.createTransactionTemplate(
                        '',
                        `New Transaction`,
                    );
                    navigate(
                        `/${projectPath}?type=tx&id=${res.data?.createTransactionTemplate?.id}&storage=${storageAcct}`,
                    );
                }}
            />
            <MenuList
                title="Scripts"
                items={project.scriptTemplates}
                active={active.type == EntityType.ScriptTemplate ? active.index : null}
                onSelect={(_, id) => {
                    navigate(
                        `/${projectPath}?type=script&id=${id}&storage=${storageAcct}`,
                    );
                }}
                onUpdate={(templateId: string, script: string, title: string) => {
                    updateScriptTemplate(templateId, script, title);
                }}
                onDelete={async (templateId: string) => {
                    await deleteScriptTemplate(templateId);
                    const id = project.scriptTemplates[0].id;
                    navigate(
                        `/${projectPath}?type=script&id=${id}&storage=${storageAcct}`,
                    );
                }}
                onInsert={async () => {
                    const res = await mutator.createScriptTemplate('', `New Script`);
                    navigate(
                        `/${projectPath}?type=script&id=${res.data?.createScriptTemplate?.id}&storage=${storageAcct}`,
                    );
                }}
            />
            <ReadMe />
        </Flex>
    )
}

export default FilesList;