/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";
import {
  Dialog,
  Grid,
  DialogContent,
  Typography,
  LinearProgress,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export default function AddDialog({
  open,
  title,
  subtitle,
  // eslint-disable-next-line no-unused-vars
  actions = <></>,
  // afterAdd = () => {},
  handleClose = () => {},
  loading,
  msg,
  children,
}) {
  return (
    <>
      <Helmet>
        <titlte>{title}</titlte>
      </Helmet>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <Grid container maxWidth="sm" spacing={1}>
            <Grid item xs={10} md={9} sx={{ mb: 3 }}>
              <Typography color="textPrimary" variant="h5">
                {title}
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                {subtitle}
              </Typography>
            </Grid>
            <Grid item xs={2} md={3} align="right">
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              {/* {actions} */}
            </Grid>

            {loading && (
              <Grid item xs={12}>
                <LinearProgress />
              </Grid>
            )}
            {msg && msg.active && (
              <Grid item xs={12}>
                {" "}
                <Alert severity={msg.severity}>{msg.msg}</Alert>
              </Grid>
            )}
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
