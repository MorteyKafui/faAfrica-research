import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import data from '../../data/accordionContents';

const AccordionComponent = () => {
  const [items, _] = useState(data);

  const accordionItem = items?.map(({ id, title, content }) => (
    <div
      key={id}
      style={{
        marginTop: '4rem',
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              style={{
                color: '#fdc280',
                fontSize: '5rem',
              }}
            />
          }
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography
            style={{
              color: '#023047',
              fontSize: '2rem',
              fontWeight: '700',
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              color: '#023047',
              fontSize: '1.6rem',
              fontWeight: '500',
              letterSpacing: '1px',
            }}
          >
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ));

  return <>{accordionItem}</>;
};

export default AccordionComponent;
