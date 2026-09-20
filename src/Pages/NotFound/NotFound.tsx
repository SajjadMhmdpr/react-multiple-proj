import { Box, Button, Paper, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 600,
          textAlign: "center",
          borderRadius: 4,
          p: {
            xs: 4,
            sm: 6,
          },
        }}
      >
        {/* 404 */}
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "6rem",
              sm: "9rem",
              md: "11rem",
            },
            fontWeight: 900,
            lineHeight: 1,
            color: "primary.main",
          }}
        >
          404
        </Typography>

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            mt: 2,
            fontWeight: 700,
          }}
        >
          صفحه پیدا نشد!
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 2,
            mb: 4,
            maxWidth: 450,
            mx: "auto",
          }}
        >
          متأسفانه صفحه‌ای که دنبالش هستید وجود ندارد یا ممکن است حذف شده باشد.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Button
            variant="contained"
            startIcon={<HomeIcon />}
            onClick={() => navigate("/")}
          >
            صفحه اصلی
          </Button>

          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
          >
            بازگشت
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
