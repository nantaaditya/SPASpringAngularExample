package com.nanta.model;

import java.io.Serializable;

import javax.persistence.*;
@Entity
@Table(name="APP_USER")
public class User implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long Id;
	private String name;
	private int age;
	private double salary;
	
	public Long getId() {
		return Id;
	}
	public String getName() {
		return name;
	}
	public int getAge() {
		return age;
	}
	public double getSalary() {
		return salary;
	}
	public void setId(Long id) {
		Id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	
	
}
