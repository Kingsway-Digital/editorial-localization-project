import PageByUrl from "./PageByUrl";
import {Grid, Paper} from "@material-ui/core";

function App() {

  return (
      <Grid container spacing={0}
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
      >
        <Grid item>
            <PageByUrl pageUrl={"/en"} />
            <PageByUrl pageUrl={"/en/style"} />

            <PageByUrl pageUrl={"/es"} />
            <PageByUrl pageUrl={"/es/style"} />

            <PageByUrl pageUrl={"/jp"} />
            <PageByUrl pageUrl={"/jp/style"} />
        </Grid>
      </Grid>
  );
}

export default App;
