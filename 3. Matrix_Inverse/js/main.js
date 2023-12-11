const matrix = [[2,3,4],[12,2,4],[1,2,5]];
// a00 a01 a02 | a01 a02
// b10 b11 b12 | b11 b12
// c20 c21 c22 | c21 c22

const det_ = mat => {
    return mat[0][0] * ((mat[1][1]*mat[2][2])-(mat[1][2]*mat[2][1])) 
            - (mat[0][1] * ((mat[1][0] * mat[2][2])-(mat[1][2] * mat[2][0])))
            + (mat[0][2] * ((mat[1][0] * mat[2][1])-(mat[1][1] * mat[2][0])))
};
console.log(det_(matrix));