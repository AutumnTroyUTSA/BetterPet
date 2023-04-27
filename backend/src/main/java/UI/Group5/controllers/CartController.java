package UI.Group5.controllers;

import UI.Group5.models.Cart;
import UI.Group5.models.Item;
import UI.Group5.repo.CartRepository;
import UI.Group5.repo.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ItemRepository itemRepository;

    @GetMapping({"/addToCart/{itemId}"})
    public Cart addToCart(@PathVariable(name = "itemId") Long itemId) {
        Item item = itemRepository.findById(itemId).get();

        Cart cart = new Cart(item);
        cartRepository.save(cart);

        return cart;
    }

    @GetMapping(value = "/all")
    public List<Cart> getCart() {return cartRepository.findAll();}


}