import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    message: string;
}

export function EmailTemplate({ firstName, message }: EmailTemplateProps) {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
            <h2 style={{ marginBottom: 8 }}>New message from portfolio</h2>
            <p style={{ margin: 0 }}>From: <strong>{firstName}</strong></p>
            <hr style={{ margin: '12px 0' }} />
            <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
            <hr style={{ margin: '12px 0' }} />
            <p style={{ fontSize: 12, color: '#666' }}>This email was sent from your portfolio contact form.</p>
        </div>
    );
}