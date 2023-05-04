package UI.Group5.controllers;

import UI.Group5.models.Cart;
import UI.Group5.models.Item;
import UI.Group5.repo.CartRepository;
import UI.Group5.repo.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ItemRepository itemRepository;


    @GetMapping(value = "/all")
    public List<Cart> getCart() {return cartRepository.findAll();}
    @PostMapping("/add")
    public Cart newCart(@RequestBody Cart newCart) {return cartRepository.save(newCart);}

    @PutMapping("/update/{id}")
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
    }




}