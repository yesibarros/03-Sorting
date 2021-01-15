
describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });


it('llegar al centro deberia costar exactamente 1 swaps', function () {
  spyOn(window, "swap").and.callThrough();//escucha a la funcion swap que se encuentra en window y llamala 
  bubbleSort([2,1,3,4,5,6,7]) 
  expect(window.swap.calls.count()).toEqual(1);
});


