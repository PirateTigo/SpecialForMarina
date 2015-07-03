function randomNumber (m,n)
{
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor( Math.random() * (n - m + 1) ) + m;
}

Array.prototype.fill = function( size, m, n )
{
 var i;
 for (i = 0;i <= size;i++) {   
  this[i] =  randomNumber(m, n);
 }

 return this;
};