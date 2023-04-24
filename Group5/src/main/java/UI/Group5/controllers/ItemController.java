package UI.Group5.controllers;

import UI.Group5.models.Item;
import UI.Group5.repo.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/items")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    public ItemController(ItemRepository itemRepository){
        this.itemRepository = itemRepository;
    }

    @GetMapping(value = "/all")
    public List<Item> getItems() {return itemRepository.findAll();}

    @GetMapping(value= "/findByName/{name}")
    public List<Item> getName(@PathVariable("name") final String name) {return itemRepository.findByName(name);}

    @PostMapping("/add")
    public Item newItem(@RequestBody Item newItem) {
        return itemRepository.save(newItem);
    }

    @PutMapping("/update/{id}")
    public Optional<Item> updateItem(@RequestBody Item newItem, @PathVariable Long id) {
        return itemRepository.findById(id)
                .map(item -> {
                    item.setName((newItem.getName()));
                    item.setPrice((newItem.getPrice()));
                    item.setCategory((newItem.getCategory()));
                    return itemRepository.save(item);
                });
    }

    @DeleteMapping("/delete/{id}")
    void deleteItem(@PathVariable Long id) {
        itemRepository.deleteById(id);
    }
}
