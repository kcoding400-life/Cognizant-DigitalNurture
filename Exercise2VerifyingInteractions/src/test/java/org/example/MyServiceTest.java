package org.example;

import org.junit.Test;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Inject mock into service
        MyService service = new MyService(mockApi);

        // Act: call the method
        service.fetchData();

        // Step 3: Verify that getData() was called
        verify(mockApi).getData();
    }
}

