package UI.Group5.repo;

import UI.Group5.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> {
    List<Cart> findByCustomerId(Long customer_id);
}

