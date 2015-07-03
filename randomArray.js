function randomNumber (m,n)
{
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor( Math.random() * (n - m + 1) ) + m;
}

Array.prototype.fill = function( b, size, m, n )
{
 var i, j;
 for (i = 0;i <= size;i++) {   
  this[i] =  randomNumber(m, n);
 }

 return this;
};