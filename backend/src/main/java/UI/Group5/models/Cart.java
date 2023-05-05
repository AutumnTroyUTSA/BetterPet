package UI.Group5.models;

import jakarta.persistence.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.List;

@Entity
@Table(name = "Cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    /*@ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;*/

    /*@OneToMany
    private List<Item> cartItems;

    /*@ManyToOne
    private Customer customer;*/

    /*@ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;*/

    /*public List<Item> getCart() {
        return cartItems;
    }

    public void setCart(List<Item> cart) {
        this.cartItems = cartItems;
    }*/

    public Cart() {

    }
    /*public Cart(Item item) {
        this.item = item;
    }*/

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    /*public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }*/
}

