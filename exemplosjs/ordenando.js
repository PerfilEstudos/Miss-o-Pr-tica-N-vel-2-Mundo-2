var numeros inteiro =[
{
    
}


]


//função swap
function swap(x, y){
    let tmp = x;
    x = y;
    y = tmp;
}

console.log(swap.length);
console.log(swap.prototype);

//função bubble_sort
function shuffleArray(arr) {
    // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}
var arrA = [ ];
console.log(shuffleArray(arrA)); // [4, 2, 1, 5, 3]
console.log(shuffleArray(arrA)); // [5, 3, 4, 2, 1]
console.log(shuffleArray(arrA)); // [5, 1, 3, 4, 2]

//função buble_sort
var bubble_sort_classic = function (array) {
    var length = array.length;
    for (var i = 0; i <comprimento; i ++) {
      for (var j = 0; j <comprimento - i - 1; j ++) {
        if (matriz [j]> matriz [j + 1]) {
          array.swap (j, j + 1);
        }
      }
    }
    array de retorno;
    };


//função selection_sort    
    void selecao (int vet, int tam){
        int i, j, min, x;
        for (i=1; i<=n-1; i++){
            min = i;
        for (j=i+1; j<=n; j++){
                if (vet[j] < vet[min])
                min = j;
        }
        x = vet[min];
        vet[min] = vet[i];
        vet[i] = x;
        }
    }

//função quick_sort
void quick(int vet[], int esq, int dir){
    int pivo = esq, i,ch,j;         
    for(i=esq+1;i<=dir;i++){        
        j = i;                      
        if(vet[j] < vet[pivo]){     
            ch = vet[j];               
            while(j > pivo){           
                vet[j] = vet[j-1];      
                j--;                    
            }
            vet[j] = ch;               
            pivo++;                    
        }
    }
    if(pivo-1 >= esq){              
        quick(vet,esq,pivo-1);      
    }
    if(pivo+1 <= dir){              
        quick(vet,pivo+1,dir);      
    }
 }

//função posicionamento