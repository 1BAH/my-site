import React from 'react';
import DocumentMeta from 'react-document-meta';

const Template = ({ title, description, children }) => {
    const meta = {
        title,
        description,
    };

    return <DocumentMeta {...meta}>{children}</DocumentMeta>;
};

export default Template;
