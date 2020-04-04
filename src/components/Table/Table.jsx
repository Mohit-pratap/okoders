import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  ellipsis: {
    whiteSpace: 'nowrap',
    width: '50px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    border: '1px solid #000000',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function CustomizedTables(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = (index) => {
    setOpen(true);
    console.log(index)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Title</StyledTableCell>
                    <StyledTableCell className={classes.ellipsis}>URL</StyledTableCell>
                    <StyledTableCell>Created At</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.data.map((item, index) => (
                    <StyledTableRow key={index} onClick={(index)=> handleOpen(index)}>
                    <StyledTableCell>{item.title}</StyledTableCell>
                    <StyledTableCell className="ellipsis">{item.url}</StyledTableCell>
                    <StyledTableCell>{item.created_at}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Transition modal</h2>
                    <p id="transition-modal-description">react-transition-group animates me.</p>
                </div>
                </Fade>
            </Modal>
    </div>
  )
}
