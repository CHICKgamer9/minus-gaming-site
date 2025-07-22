import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div>
        <h1>Thanks, {firstName}, for contacting Minus Gaming.</h1>
        <p>We have received your message and will reply within 24 hours.</p>
    </div>
  );
}