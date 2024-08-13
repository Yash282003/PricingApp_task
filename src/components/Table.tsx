import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: string, model: string, price: string) {
  return { name, model, price };
}

const rows = [
  createData("OpenAI", "GPT-3.5", "$0.002"),
  createData("OpenAI", "GPT-4", "$0.03"),
  createData("Together AI", "Llama-2-70b", "$0.0008"),
  createData("Together AI", "Llama-2-13b", "$0.0006"),
];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#1e293b",
        fontFamily: "sans-serif",
        width: "100%",
        marginTop: "1rem",
        overflow: "hidden",
        borderRadius: "8px",
        border: "1px solid #334155",
      }}
    >
      <Table
        sx={{
          width: "100%",
          tableLayout: "fixed",
          "& th, & td": {
            padding: "17px",

            textAlign: "left",
          },
        }}
        aria-label="simple table"
      >
        <TableHead sx={{ backgroundColor: "#6366f1" }}>
          <TableRow sx={{ borderBottom: "2px solid transparent" }}>
            <TableCell sx={{ color: "#e2e8f0", fontWeight: "600", fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" }, }}>
              API
            </TableCell>
            <TableCell sx={{ color: "#e2e8f0", fontWeight: "600", fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" }, }}>
              MODEL
            </TableCell>
            <TableCell sx={{ color: "#e2e8f0", fontWeight: "600", fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" }, }}>
              PRICE PER 1K TOKENS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                borderBottom: "2px solid #334155",
              }}
            >
              <TableCell
                sx={{
                  color: "#e2e8f0",
                  fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                sx={{
                  color: "#e2e8f0",
                  fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  {row.model}
                </div>
              </TableCell>
              <TableCell
                sx={{
                  color: "#e2e8f0",
                  fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  {row.price}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
