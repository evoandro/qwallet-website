import { Typography, Box, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatEllipsis, copyText } from 'src/app/utils/function';

const TransactionText = (props) => {
  const { tx, letter, copy, className, link } = props;
  const [isCopy, setIsCopy] = useState(false);

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => setIsCopy(false), 1000);
    }
  }, [isCopy]);
  const handleCopy = () => {
    copyText(tx);
    setIsCopy(true);
  };
  return (
    <Box className="flex gap-5 items-center">
      <Link to={link ? `/explorer/tx/${tx}` : ''}>
        <Tooltip title={tx} arrow>
          <Typography className={`text-hawkes-100 font-mono ${className}`}>
            {letter ? formatEllipsis(tx, letter) : tx}
          </Typography>
        </Tooltip>
      </Link>
      {copy && (
        <button type="button" onClick={handleCopy}>
          {isCopy ? (
            <img className="w-14 mb-4" src="assets/icons/ok_icon_light.svg" alt="" />
          ) : (
            <img className="w-14 mb-4" src="assets/icons/copy_icon.webp" alt="" />
          )}
        </button>
      )}
    </Box>
  );
};

export default TransactionText;
