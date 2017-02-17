package com.nanta.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nanta.model.User;
import com.nanta.repository.UserRepository;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{
 
    @Autowired
    private UserRepository userRepository;
 
    public User findById(Long id) {
        return userRepository.findOne(id);
    }
    public User findByName(String name) {
        return userRepository.findByName(name);
    }
    public void saveUser(User user) {
        userRepository.save(user);
    }
    public void updateUser(User user){
        saveUser(user);
    }
    public void deleteUserById(Long id){
        userRepository.delete(id);
    }
    public void deleteAllUsers(){
        userRepository.deleteAll();
    }
    public List<User> findAllUsers(){
        return (List<User>)userRepository.findAll();
    }
    public boolean isUserExist(User user) {
        return findByName(user.getName()) != null;
    }
 
}
