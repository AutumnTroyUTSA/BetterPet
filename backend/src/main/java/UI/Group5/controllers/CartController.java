package UI.Group5.controllers;

import UI.Group5.models.Item;
import UI.Group5.repo.CartRepository;
import UI.Group5.repo.ItemRepository;
import jakarta.persistence.Basic;
import jakarta.persistence.FetchType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ItemRepository itemRepository;

    @Basic(fetch = FetchType.LAZY)
    List<Optional<Item>> cart = new ArrayList<Optional<Item>>();
    /*@GetMapping(value = "/all")
    public List<Cart> getCart() {return cartRepository.findAll();}*/
    /*@RequestMapping("/add/{id}")
    public void newCartItem(@RequestBody Item newCartItem, @PathVariable Long id) {cart.add(newCartItem);}*/

    public void setCart(List<Optional<Item>> cart) {
        this.cart = cart;
    }

    @GetMapping("/add/{id}")
    public void/*Optional<Item>*/ getItem(@PathVariable Long id) {
        Optional<Item> newItem = itemRepository.findById(id);
        cart.add(newItem);
        //return newItem;
    }
    @GetMapping("/showCart")
    public @ResponseBody List<Optional<Item>> getCart() {return cart;}


   /* @PutMapping("/update/{id}")
    public Optional<Cart> updateCart(@RequestBody Cart newCart, @PathVariable Long id) {
        return cartRepository.findById(id)
                .map(cart -> {
                    cart.setItem(newCart.getItem());
                    cart.setCustomer(newCart.getCustomer());
                    return cartRepository.save(cart);
                });
    }
    @GetMapping(value = "/{customer_id}")
    public List<Cart> getCartByCustomerId(@PathVariable Long customer_id) {
        return cartRepository.findByCustomerId(customer_id);
    }*/


}