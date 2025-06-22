import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

// ✅ Custom Styled AccordionSummary with AddIcon
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ color: '#1B3C74' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#f9f9f9',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)', // makes "+" to "×"
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

// ✅ Optional custom AccordionDetails (if needed)
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid #e0e0e0',
}));

export default function Accordions({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {Array.isArray(data) && data.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography
              fontSize={18}
              fontWeight={700}
              color="#1B3C74"
              lineHeight={1.2}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={14}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
