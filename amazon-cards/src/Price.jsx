export default function Price({ oldPrice, newPrice }) {
  
    let styles = {
        oldStyles: {
            textDecorationLine: "line-through",
        },

        newStyles: {
            fontWeight: "bold"
        },

        backstyle: {
            backgroundColor: "#e0cf18ff",
            height: '30px',
            width: '200px',
            borderBottomLeftRadius: "14px",
            borderBottomRightRadius: "14px",
        }
    };

    

    return (
    <div style={styles.backstyle}>
      <span style={styles.oldStyles}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={styles.newStyles}>{newPrice}</span>
    </div>
  );
}
