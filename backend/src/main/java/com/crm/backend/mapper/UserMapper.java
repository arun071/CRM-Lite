package com.crm.backend.mapper;

import com.crm.backend.dto.UserDto;
import com.crm.backend.model.User;

public class UserMapper {
    public static UserDto toDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setUserName(user.getUsername());
        userDto.setEmail(user.getEmail());
        return userDto;
    }

    public static User toEntity(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getId());
        user.setUsername(userDto.getUserName());
        user.setEmail(userDto.getEmail());
        return user;
    }
}
