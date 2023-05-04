package UI.Group5.controllers;

import UI.Group5.models.Customer;
import UI.Group5.models.Item;
import UI.Group5.repo.CustomerRepository;
import UI.Group5.repo.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    public CustomerController(ItemRepository itemRepository){
        this.customerRepository = customerRepository;
    }

    @GetMapping(value = "/all")
    public List<Customer> getCustomers() {return customerRepository.findAll();}

    @PostMapping(value = "/add")
    public Customer newCustomer(@RequestBody Customer newCustomer) {return customerRepository.save(newCustomer);}

    @PutMapping("/update/{id}")
    public Optional<Customer> updateCustomer(@RequestBody Customer newCustomer, @PathVariable Long id) {
        return customerRepository.findById(id)
                .map(customer -> {
                    customer.setFirstName((newCustomer.getFirstName()));
                    customer.setLastName((newCustomer.getLastName()));
                    customer.setEmail((newCustomer.getEmail()));
                    customer.setPassword((newCustomer.getPassword()));
                    customer.setUsername((newCustomer.getUsername()));
                    return customerRepository.save(customer);
                });
    }

    @DeleteMapping("/delete/{id}")
    void deleteCustomer(@PathVariable Long id) {customerRepository.deleteById(id);}
}
